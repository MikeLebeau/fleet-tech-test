import debounce from "../../utils/debounce";

export default function Header({ handleSearch }: { handleSearch: Function }) {

    const debounceOnSearch = debounce(handleSearch);

    return <div className="flex w-full bg-green-300 p-5 gap-2 h-16 justify-center md:justify-normal">
        <h1>Fleet Movie</h1>
        <img src="" />

        <input type="text" placeholder="Search..." onChange={debounceOnSearch} />
    </div>;
}