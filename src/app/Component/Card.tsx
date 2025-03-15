'use client';
import Link from "next/link";

interface Product {
    id: number;
    name: string;
    price: number;
    location: string;
    seller: string;
    image_url: string;
}

interface PropsType {
    product: Product;
}

export default function Card({ product }: PropsType) {
    return (
        <div className="card border border-[#DEA160] rounded">
            <div className="card-head">
                <img src={product.image_url} alt={product.name} className="w-full h-32 object-cover" />
            </div>
            <div className="card-body text-black py-3 px-4">
                <div className="c-b-title">
                    <p className="text-3xl font-semibold text-center">{product.name}</p>
                </div>
                <div className="c-b-body text-left pt-2 flex flex-col gap-1">
                    <div className="c-b-body-item flex flex-row items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z" /></svg>
                        <span className="font-semibold text-lg">{product.seller}</span>
                    </div>
                    <div className="c-b-body-item flex flex-row items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22" /></svg>
                        <span className="font-semibold text-lg">{product.location}</span>
                    </div>
                    <div className="c-b-body-item flex flex-row items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16q-.825 0-1.412-.587T10 14t.588-1.412T12 12t1.413.588T14 14t-.587 1.413T12 16M7.375 7h9.25l2-4H5.375zM8.4 21h7.2q2.25 0 3.825-1.562T21 15.6q0-.95-.325-1.85t-.925-1.625L17.15 9H6.85l-2.6 3.125q-.6.725-.925 1.625T3 15.6q0 2.275 1.563 3.838T8.4 21" /></svg>
                        <span className="font-semibold text-lg">Rp. {product.price}/kg</span>
                    </div>
                </div>
                <div className="c-b-footer">
                    <div className="buttons w-full flex gap-3 mt-3 text-white">
                        <Link href="/Pages/Chat">
                            <button className="bg-[#DEA160] font-bold p-2 rounded-lg cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 14h8v-2H6zm0-3h12V9H6zm0-3h12V6H6zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm3.15-6H20V4H4v13.125zM4 16V4z" /></svg>
                            </button>
                        </Link>
                        <button className="bg-[#DEA160] font-bold p-2 rounded-lg cursor-pointer w-full">Tambahkan</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
