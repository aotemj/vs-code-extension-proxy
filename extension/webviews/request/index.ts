import fetch from "node-fetch";
import * as vscode from "vscode";
// import { refreshTokenKey, accessTokenKey, apiBaseUrl } from "./constants";
// import { Util } from "./Util";

console.log('apiBaseUrL:->',apiBaseUrl);
export const mutationNoErr = async (path: string, body: any) => {
    try {
        const d = await mutation(path, body);
        return d;
    } catch {}
};

export const mutation = async (path: string, body: any) => {
    try {
        const r = await fetch(apiBaseUrl + path, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json",
                // "access-token": Util.getAccessToken(),
                // "refresh-token": Util.getRefreshToken(),
            },
        });
        if (r.status !== 200) {
            throw new Error(await r.text());
        }
        const accessToken = r.headers.get("access-token");
        const refreshToken = r.headers.get("refresh-token");
        if (accessToken && refreshToken) {
            // await Util.globalState.update(accessTokenKey, accessToken);
            // await Util.globalState.update(refreshTokenKey, refreshToken);
        }
        const d = await r.json();
        return d;
    } catch (err) {
        console.log(err);
        vscode.window.showErrorMessage(err.message);
        throw err;
    }
};

export const defaultQueryFn = async <T extends any = any>(
    url: string
): Promise<T> => {
    // if (!accessToken || !refreshToken) {
    //     await loadTokens();
    // }
    const r = await fetch(`${apiBaseUrl}${url}`, {
        headers: {
            // "access-token": accessToken,
            // "refresh-token": refreshToken,
        },
    });
    if (r.status !== 200) {
        throw new Error(await r.text());
    }
    // const _accessToken = r.headers.get("access-token");
    // const _refreshToken = r.headers.get("refresh-token");
    // if (_accessToken && _refreshToken) {
    //     accessToken = _accessToken;
    //     refreshToken = _refreshToken;
    //     AsyncStorage.setItem(accessTokenKey, accessToken);
    //     AsyncStorage.setItem(refreshTokenKey, refreshToken);
    // }
    return await r.json();
};
