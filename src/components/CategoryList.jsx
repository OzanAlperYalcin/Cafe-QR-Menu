import CategoryItem from './CategoryItem'

function CategoryList({ data }) {
  return (
    <div className="mb-5 px-5 flex items-center gap-2.5 overflow-y-auto">
        {data.map((item, i) => (
          <CategoryItem key={i} data={item} />
        ))}
    </div>

  )
}

export default CategoryList