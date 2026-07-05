import supabase from "../config/client";

export async function uploadFileToSupabase(file: File, bucketName: string, folderPath: string) {
    try {
        const fileName = `${Date.now()}-${file.name}`;
        const filePath = folderPath ? `${folderPath}/${fileName}` : fileName;

        const { data, error } = await supabase.storage.from(bucketName).upload(filePath, file, {
            cacheControl: '3600',
            upsert: false
        });

        console.log(data, 'data');

        if (error) {
            return { success: false, error: error.message }
        }

        return {
            success: true,
        }

    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        }
    }
}
