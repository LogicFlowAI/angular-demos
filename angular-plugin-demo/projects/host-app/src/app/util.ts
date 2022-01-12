export function normalizeCommonJSImport<T>(importPromise: Promise<T>) {
  return importPromise.then((m: any) => m);
}
