import { NextResponse } from "next/server"


export const GET = async()=>{
    try {
        return NextResponse.json({
            message:'Product loaded successfully',
            success: true,
            // productData
        }, {status: 200});
        
    } catch (error) {
        return NextResponse.json({error: 'product loading error'}, {status: 500});
    }
}