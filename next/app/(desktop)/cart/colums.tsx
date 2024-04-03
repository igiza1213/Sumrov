"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Minus, MoreHorizontal, Plus } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type cart = {
  id: string;
  name: string;
  price: number;
  amount: number;
  color: string;
  size: string;
  image: string;
};

export const columns: ColumnDef<cart>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "image",
    header: () => <div className="text-center font-noto">이미지</div>,
    cell: () => {
      return (
        <div className="w-[150px] flex justify-center">
          <img
            className="w-20 h-[95px] border border-black"
            src="https://via.placeholder.com/80x95"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: () => <div className="text-center font-noto">상품정보</div>,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <div className="w-[400px] h-12 flex-col justify-center items-start gap-4 inline-flex">
          <div className="text-black text-sm font-medium font-noto">
            {payment.name}
          </div>
          <div className="text-zinc-600 text-xs font-normal font-noto">
            [옵션 : {payment.color} / {payment.size}]
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => <div className="text-center font-noto">판매가</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: "KRW",
      }).format(price);
      return <div className="w-[100px] flex justify-center">{formatted}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-center font-noto">수량</div>,
    cell: ({ row }) => {
      const amount = row.getValue("amount") as string;
      return (
        <div className="w-[70px] flex justify-center h-5">
          <div className="flex justify-between w-full">
            <Minus size={20} /> <div className="text-[16px]">{amount}</div>
            <Plus size={20} />
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => <div className="text-center font-noto">합계</div>,
    cell: ({ row }) => {
      const payment = row.original;
      const formatted = new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: "KRW",
      }).format(payment.price * payment.amount);
      return <div className="w-[100px] flex justify-center">{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center font-noto">선택</div>,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="font-noto font-bold">
              선택
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="font-semibold font-noto cursor-pointer"
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              주문하기
            </DropdownMenuItem>
            <DropdownMenuItem className="font-semibold font-noto cursor-pointer">
              삭제
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
