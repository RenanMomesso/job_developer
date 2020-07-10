import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import BodyCat from "../../components/BodyCat";

function CategoriaOne(props) {
  const categoryName = props.match.params.name;

  console.log(categoryName)

  return (
    <Layout>
      <BodyCat  categoriaNome={categoryName} />
    </Layout>
  );
}

export default CategoriaOne;
