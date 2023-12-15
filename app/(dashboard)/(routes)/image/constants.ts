import * as z from "zod";

export const formSchema = z.object({
    prompt: z.string().min(1, {
        message: "이미지 프롬프트를 입력해주세요."
    }),
    amount: z.string().min(1, {
        message: "Amount를 선택해주세요."
    }),
    resolution: z.string().min(1, {
        message: "Resolution을 선택해주세요."
    }),
});

export const amountOptions = [
    {
        value: "1",
        label: "1 Photo"
    },
    {
        value: "2",
        label: "2 Photo"
    },
    {
        value: "3",
        label: "3 Photo"
    },
    {
        value: "4",
        label: "4 Photo"
    },
    {
        value: "5",
        label: "5 Photo"
    },
];

export const resolutionOptions = [

    {
        value: "1024x1024",
        label: "1024x1024"
    }
,
    {
        value: "1024x1792",
        label: "1024x1792"
    }
];
