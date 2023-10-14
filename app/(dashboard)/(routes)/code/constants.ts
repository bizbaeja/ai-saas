import * as z from "zod";

export const formSchema = z.object({
    prompt: z.string().min(1,{
        message:"프롬프트를 입력해주세요."
    })

})
//ㅇㅇ