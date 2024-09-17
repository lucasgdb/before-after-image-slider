import BeforeAfterSlider from "./components/BeforeAfterSlider";

function App() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <BeforeAfterSlider
        beforeImageUrl="/assets/before-dog.jpeg"
        afterImageUrl="/assets/after-dog.jpeg"
      />

      <BeforeAfterSlider
        beforeImageUrl="/assets/before-girl-2.jpeg"
        afterImageUrl="/assets/after-girl-2.jpeg"
        direction="vertical"
        beforeTextAlignment="top"
        afterTextAlignment="bottom"
      />

      <BeforeAfterSlider
        beforeImageUrl="/assets/before-girl.jpeg"
        afterImageUrl="/assets/after-girl.jpeg"
        width={700}
        height={900}
        beforeTextAlignment="left"
        afterTextAlignment="right"
      />
    </div>
  );
}

export default App;
