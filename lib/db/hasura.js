export async function queryHasuraGQL(operationsDoc, operationName, variables) {
  const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE2NTAyMTM2NjIsImV4cCI6MTY1MDgxODQ4MCwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6ImlyYWtsaSJ9fQ.CT8oqFqRAPr_TpJpJIhtvmgf1zQj8OcPDcx0tmR8n2I",
    },
    headers: {
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

function fetchMyQuery() {
  const operationsDoc = `
    query MyQuery {
      users {
        id
        email
        issuer
        publicAddress
      }
    }
  `;
  return queryHasuraGQL(operationsDoc, "MyQuery", {});
}

export async function startFetchMyQuery() {
  const { errors, data } = await fetchMyQuery();
  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
