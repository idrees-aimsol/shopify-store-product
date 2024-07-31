import { Card, Frame, Layout, Page, Thumbnail, Text, DataTable, Button} from "@shopify/polaris";
// import { authenticate } from "../shopify.server";

// export const loader = async ({ request }) => {
//   const admin = await authenticate.admin(request)

//   const response = await admin.graphql(
//     `#graphql
//         {
//             products(first: 10) {
//                 edges {
//                     node {
//                         id
//                         title
//                         handle
//                         status
//                         images (first: 1) {
//                             edges {
//                                 node {
//                                     originalSrc
//                                     altText
//                                 }
//                             }
//                         }
                        
//                         variants(first: 10) {
//                             edges{
//                                 node{
//                                     id
//                                     price
//                                     barcode
//                                     createdAT
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }`,
//   );
// };

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Sample 1",
      status: "Active",
      price: "19.20",
      image: "https://shorturl.at/H9gLk",
    },
    {
      id: 2,
      title: "Sample 2",
      status: "Draft",
      price: "18.00",
      image: "https://shorturl.at/sTHtf",
    },
    {
      id: 3,
      title: "Sample 3",
      status: "Active",
      price: "20.25",
      image: "https://shorturl.at/H9gLk",
    },
    {
        id: 4,
        title: "Sample 4",
        status: "Draft",
        price: "10.00",
        image: "https://shorturl.at/sTHtf",
    },
    {
        id: 5,
        title: "Sample 5",
        status: "Active",
        price: "20.10",
        image: "https://shorturl.at/H9gLk",
    }
  ];

  const rows = products.map((product) => [
    // eslint-disable-next-line react/jsx-key
    <Thumbnail source={product.image} alt={product.title} />,
    product.title,
    product.status,
    product.price,
    <Button>View</Button>
  ]);

  return (
    <Frame>
      <Page fullWidth>
        <Layout>
          <Layout.Section>
            <Card>
              <Text as="h2" variant="HeadingMd">
                Products List
              </Text>
              <DataTable
                columnContentTypes={["text, text, text, text, text"]}
                headings={["Image", "Title", "Status", "Price", "Detail"]}
                rows={rows}
              />
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </Frame>
  );
}
