import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getLanguages, translateText } from "./redux/actions";
import { setUpdateText } from "./redux/slices/translateSlice";
function App() {
  const dispatch = useDispatch();
  const { isLoading, isError, languages } = useSelector((store) => store.languageReducer);
  const translateState = useSelector((store) => store.translateReducer);
  const [sourceLang, setSourceLan] = useState({
    label: "Turkish",
    value: "tr",
  });
  const [targetLang, setTargetLan] = useState({
    label: "English",
    value: "en",
  });
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  const formated = useMemo(
    () =>
      languages.map((item) => ({
        label: item.name,
        value: item.code,
      })),
    [languages]
  );
  const handleSwap = () => {
    setSourceLan(targetLang);
    setTargetLan(sourceLang);
    if (text & translateState.answer) {
      const oldText = text;
      setText(translateState.answer);
      dispatch(setUpdateText(oldText));
    }else{
      setText("");
      dispatch(setUpdateText(""));
    }
  };
  const handleTranslate = () => {
    if (text) {
      dispatch(translateText({ sourceLang, targetLang, text }));
    }
  };
  return (
    <div className="bg-zinc-900 h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center">
        <h1 className="text-center mb-7 text-4xl font-semibold">Çeviri +</h1>
        {/* language area */}
        <div className="flex gap-2 text-black">
          <Select
            onChange={(e) => setSourceLan(e)}
            value={sourceLang}
            className="flex-1"
            options={formated}
            isLoading={isLoading}
          />
          <button
            onClick={handleSwap}
            className="text-white bg-zinc-700 px-6 py-2 rounded hover:ring-2 hover:bg-zinc-800"
          >
            Değiş
          </button>
          <Select
            onChange={(e) => setTargetLan(e)}
            value={targetLang}
            className="flex-1"
            options={formated}
            isLoading={isLoading}
          />
        </div>
        {/* textarea */}
        <div className="flex mt-5 gap-3 md:gap-[105px] max-md:flex-col">
          <div className="flex-1">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full min-h-[300px] max-h-[500px] text-black p-[10px] text-[20px] rounded"
            ></textarea>
          </div>
          <div className="flex-1 relative">
            <textarea
              value={translateState.answer}
              disabled
              className="w-full min-h-[300px] max-h-[500px] text-gray-300 p-[10px] text-[20px] rounded"
            ></textarea>
            {translateState.isLoading && (
              <div className="loader absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-yellow-300">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={handleTranslate}
          className="bg-zinc-700 mt-3 py-3 px-5 text-[17px] rounded hover:ring-2 hover:bg-zinc-900 transition"
        >
          Çeviri
        </button>
      </div>
    </div>
  );
}

export default App;
