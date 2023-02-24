import { Navigate } from "react-router-dom";
import { NewsList } from "../components/NewsList";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewNews } from "../components/NewNews";
import { Loading } from "../components/Loading";
import useNews from "../hooks/useNews";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const HomePage = () => {
  const { news, error, loading, removeNews } = useNews();
  const { user } = useContext(AuthContext);

  return (
    <section>
      <h1>Latest News</h1>
      <NewsList newss={news} removeNows={removeNews} />
    </section>
  );
};
