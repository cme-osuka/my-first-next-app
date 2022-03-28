import React from 'react';
import products from "../../data/products.json";

function Product({ product }) {

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = products.map(product => ({
    params: { productName: product.name }
  }))

  // Våra paths kommer sedan se ut såhär:
  // [
  //   { params: { productName: 'pink-tshirt' } },
  //   { params: { productName: 'orange-tshirt'} }
  //   ... 
  // ]

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const product = products.find(product => product.name === params.productName);

  return { props: { product } }
}

/*export async function getServerSideProps({ params }) {
  const res = await axios.get(`http://k4backend.osuka.dev/products/${params.productName}`)
  const product = res.data;

  return { props: { product } }
}*/

export default Product