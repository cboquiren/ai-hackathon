// import { useState } from "react";
// import { ChatOpenAI } from "@langchain/openai";
// import { HumanMessage } from "@langchain/core/messages";
// import { StringOutputParser } from "@langchain/core/output_parsers";
import { Navbar } from "./components/navbar";
import { Route, Routes } from "react-router";
import { Homepage } from "./pages/home";
import { ListingsProvider } from "./providers/listingsProvider";
import { ListingsPage } from "./pages/listings";

function App() {
  // const [message, setMessage] = useState<string | null>(null);

  // const model = new ChatOpenAI({
  //   openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
  //   model: "gpt-3.5-turbo",
  //   temperature: 0,
  // });

  // const parser = new StringOutputParser();

  // const test = async () => {
  //   const query = await model.invoke([new HumanMessage({ content: "Hi! I'm Carl" })]);
  //   return parser.invoke(query);
  // };

  // test().then((data) => setMessage(data));

  return (
    <>
      <ListingsProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/listings" element={<ListingsPage />}></Route>
        </Routes>
      </ListingsProvider>
    </>
  );
}

export default App;
