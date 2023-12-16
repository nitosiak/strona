export default {
  async fetch(req) {
    const file1 = new FileBlob("file1.txt", await Deno.readFile("./path/to/file1.txt"));
    const file2 = new FileBlob("file2.txt", await Deno.readFile("./path/to/file2.txt"));

    const response = new Response();

    response.headers.set("Content-Disposition", "attachment; filename=file1.txt");
    response.body = file1.readable;

    response.headers.set("Content-Disposition", "attachment; filename=file2.txt");
    response.body = file2.readable;

    return response;
  },
};