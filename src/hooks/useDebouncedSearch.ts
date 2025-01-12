import { useEffect, useState } from "react";
import { Subject, debounceTime, distinctUntilChanged } from "rxjs";
import { useSearchStore } from "@/hooks/useStore";

export const useDebouncedSearch = (delay: number = 300) => {
  const { searchTerm, setSearchTerm } = useSearchStore(); 
  const [debouncedValue, setDebouncedValue] = useState(searchTerm);

  useEffect(() => {
    const searchSubject = new Subject<string>();

    const subscription = searchSubject
      .pipe(
        debounceTime(delay), 
        distinctUntilChanged()
      )
      .subscribe((value) => {
        setDebouncedValue(value);
        setSearchTerm(value); 
      });

    return () => subscription.unsubscribe();
  }, [delay, searchTerm, setSearchTerm]);

  const onSearchChange = (value: string) => {
    setSearchTerm(value); 
  };

  return { debouncedValue, onSearchChange };
};
