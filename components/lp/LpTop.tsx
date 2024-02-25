

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <h1 className="sr-only">Myariad Notebook LP Top Page</h1>
      <h2>あったかも知れない他の人生を思い描いたことのある全ての人へ</h2>
      <h3 className="text-3xl lg:text-4xl !leading-normal mx-auto max-w-2xl text-start">
        反実仮想で人生をリフレーミングする<br />
        Myariadノートブック{" "}
      </h3>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
