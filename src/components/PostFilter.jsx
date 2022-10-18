import React from "react";
import Input from "./UI/input/Input";
import Select from "./UI/select/Select";

export default function PostFilter({ filter, setFilter }) {
  return (
    <div className="filter">
      <Input
        placeholder="Поиск"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      ></Input>
      <Select
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
}
