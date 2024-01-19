export default function Profile(props) {
    return (
        <>
        <div class="px-12 py-4 w-[350px] text-center">
            <div class="mb-6 flex justify-center">
                <img
                src={ props.image }
                class="w-32 max-h-32 object-cover rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <h5 class="mb-2 text-xl font-semibold">{ props.name }</h5>
            <h6 class="mb-2 font-semibold text-primary dark:text-primary-500">
                { props.position }
            </h6>
            <p class="mb-4">
                { props.bio }
    </p>
        </div>
        </>
    )
}