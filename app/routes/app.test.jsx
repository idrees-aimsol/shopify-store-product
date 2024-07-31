import { useLoaderData, Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import React from "react";
import { Layout } from "@shopify/polaris";
import { authenticate } from "../shopify.server";


export async function loader({request}) {
//   const user = {
//     name: "test1",
//     email: "test@example.com",
//   };

  const { admin } = await authenticate.admin(request);

  const response = await admin.graphql(
    `#graphql
    query {
      product(id: "gid://shopify/Product/8752277192962") {
        title
        description
        onlineStoreUrl
      }
    }`,
  );
  
  const data = await response.json();  

  return json(data);

//   return json(user);
}

// export async function action({ request }) {
//   const formData = await request.formData();

//   return json({
//     name: formData.get("displayName"),
//     email: formData.get("email"),
//   });
// }

const Test = () => {
  const user = useLoaderData();
  console.log(user);

  return (
    <Layout>
      <ui-title-bar title="Products">
        <button onclick="console.log('Secondary action')">Secondary action</button>
        <button variant="primary" onclick="console.log('Primary action')">Primary action </button>
      </ui-title-bar>

      <Form method="post">
        <h1>Settings</h1>

        <input name="displayName" defaultValue={user.name} />
        <input name="email" defaultValue={user.email} />

        <button type="submit">Save</button>
      </Form>
    </Layout>
  );
};

export default Test;
