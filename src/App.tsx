import BeforeAfterSlider from "./components/BeforeAfterSlider";

function App() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <BeforeAfterSlider
        beforeImageUrl="before-dog.jpeg"
        afterImageUrl="after-dog.jpeg"
      />
      <BeforeAfterSlider
        beforeImageUrl="before-girl.jpeg"
        afterImageUrl="after-girl.jpeg"
      />
    </div>
  );
}

export default App;
