import React from "react";
import { Link } from "@pankod/refine-nextjs-router";

import { TitleProps } from "@pankod/refine-core";

export const Title: React.FC<TitleProps> = ({ collapsed }) => (
  <Link href="/">
    {collapsed ? (
      <img
        src={"data:image/png;base64,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"}
        alt="Refine"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 24px",
          width:"90px",
        }}
      />
    ) : (
      <img
        src={"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjg2cHgiIGhlaWdodD0iMTI2cHgiIHZpZXdCb3g9IjAgMCA2ODYgMTI2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1NC4xICg3NjQ5MCkgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+RmluYWwgRmluYWwgRmluYWwgTG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMzUuNDUwMDcyNyUiIHkxPSI2MS4xOTM4NDk0JSIgeDI9Ijg1Ljc4NTA3OTglIiB5Mj0iMjUuNjA0MzY1NiUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0VGNTM2NiIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRDcxRTIzIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTQuMjE0OTIwMiUiIHkxPSI3NC43MTY5MzY3JSIgeDI9IjU4LjgzNTA2ODIlIiB5Mj0iNDEuNzQwMDQ2NyUiIGlkPSJsaW5lYXJHcmFkaWVudC0yIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Q3MUUyMyIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRUY1MzY2IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkZpbmFsLUZpbmFsLUZpbmFsLUxvZ28iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cC0yIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJmaW5hbC1sb2dvIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTMiPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUmVjdGFuZ2xlLUNvcHktNCIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjguNjg0Mzk5LCAzMy45MDYyNTApIHNjYWxlKC0xLCAtMSkgdHJhbnNsYXRlKC0yOC42ODQzOTksIC0zMy45MDYyNTApICIgcG9pbnRzPSIxLjAxOTA3NDU2ZS0xMyAzNC43ODUzMTQ0IDU3LjM2ODc5NzcgMCA1Ny4zNjg3OTc3IDMxLjI5ODA3NjkgMS4wMTkwNzQ1NmUtMTMgNjcuODEyNSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUmVjdGFuZ2xlLUNvcHktNCIgZmlsbD0iI0VGNTM2NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjguNjg0Mzk5LCA3MC4wNzI5MTcpIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTI4LjY4NDM5OSwgLTcwLjA3MjkxNykgIiBwb2ludHM9IjEuMDE5MDc0NTZlLTEzIDcwLjk1MTk4MSA1Ny4zNjg3OTc3IDM2LjE2NjY2NjcgNTcuMzY4Nzk3NyA2Ny40NjQ3NDM2IDEuMDE5MDc0NTZlLTEzIDEwMy45NzkxNjciPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlJlY3RhbmdsZS1Db3B5LTQiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgyLjE2MTExNywgNTUuOTI3MDgzKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC04Mi4xNjExMTcsIC01NS45MjcwODMpICIgcG9pbnRzPSI1My40NzY3MTg1IDU2LjgwNjE0NzcgMTEwLjg0NTUxNiAyMi4wMjA4MzMzIDExMC44NDU1MTYgNTMuMzE4OTEwMyA1My40NzY3MTg1IDg5LjgzMzMzMzMiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlJlY3RhbmdsZS1Db3B5LTQiIGZpbGw9IiNFRjUzNjYiIHBvaW50cz0iNTMuNDc2NzE4NSA5Mi45NzI4MTQ0IDExMC44NDU1MTYgNTguMTg3NSAxMTAuODQ1NTE2IDg5LjQ4NTU3NjkgNTMuNDc2NzE4NSAxMjYiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZD0iTTEzNC41OTQ5MzcsNzkuMTMxMzU1OSBMMTUxLjcwODUyOCw3OS4xMzEzNTU5IEMxNTEuOTQxMzY2LDg0LjE2NTI1NDIgMTU2LjAxNjAzLDg4LjYyNzExODYgMTYzLjY5OTY4Myw4OC42MjcxMTg2IEMxNzAuNTY4NDAzLDg4LjYyNzExODYgMTc1LjM0MTU4Miw4NS40MjM3Mjg4IDE3NS40NTgwMDEsODAuMjc1NDIzNyBDMTc1LjU3NDQyLDc2LjcyODgxMzYgMTczLjk0NDU1NCw3My42Mzk4MzA1IDE2NS43OTUyMjUsNzEuMzUxNjk0OSBMMTU2LjEzMjQ0OSw2OC43MjAzMzkgQzEzOC40MzY3NjMsNjMuMzQzMjIwMyAxMzUuNDA5ODcsNTMuMTYxMDE2OSAxMzUuNDA5ODcsNDYuMDY3Nzk2NiBDMTM1LjQwOTg3LDMxLjk5NTc2MjcgMTQ3LjYzMzg2MywyMi41IDE2My4wMDExNjksMjIuNSBDMTc4LjQ4NDg5NCwyMi41IDE5MC4xMjY3OTMsMzEuNTM4MTM1NiAxOTAuMTI2NzkzLDQ2LjYzOTgzMDUgTDE3My4xMjk2MjEsNDYuNjM5ODMwNSBDMTczLjEyOTYyMSw0MS4zNzcxMTg2IDE2OS41MjA2MzIsMzcuNzE2MTAxNyAxNjIuNzY4MzMxLDM3LjcxNjEwMTcgQzE1Ni44MzA5NjMsMzcuNzE2MTAxNyAxNTIuNDA3MDQxLDQwLjkxOTQ5MTUgMTUyLjQwNzA0MSw0NS42MTAxNjk1IEMxNTIuNDA3MDQxLDQ3LjY2OTQ5MTUgMTUzLjIyMTk3NCw1MS40NDQ5MTUzIDE2MS4wMjIwNDYsNTMuNjE4NjQ0MSBMMTcwLjU2ODQwMyw1Ni41OTMyMjAzIEMxOTAuMDEwMzc0LDYyLjA4NDc0NTggMTkyLjgwNDQyOSw3Mi44Mzg5ODMxIDE5Mi41NzE1OTEsODAuMzg5ODMwNSBDMTkyLjMzODc1NCw5Ni4wNjM1NTkzIDE3Ny45MDI3OTksMTAzLjUgMTYzLjY5OTY4MywxMDMuNSBDMTQ2LjIzNjgzNSwxMDMuNSAxMzQuNTk0OTM3LDkzLjMxNzc5NjYgMTM0LjU5NDkzNyw3OS4xMzEzNTU5IFogTTIwNi44MTk0NDMsMjMuNDE1MjU0MiBMMjI2Ljc1MzEzMiwyMy40MTUyNTQyIEwyMjYuNzUzMTMyLDEwMi4yNDE1MjUgTDIwOS43NTU5NiwxMDIuMjQxNTI1IEwyMDkuNzU1OTYsMzIuMjcxNDA0NSBMMjA2LjgxOTQ0MywyMy40MTUyNTQyIFogTTI5Mi40ODQyMTcsNzQuMjExODY0NCBMMzE2LjQ2NjUyOCwyMy40MTUyNTQyIEwzMzAuNzg2MDYzLDIzLjQxNTI1NDIgTDM0MC41NjUyNTgsMTAyLjI0MTUyNSBMMzIzLjQ1MTY2NywxMDIuMjQxNTI1IEwzMTcuODYzNTU2LDU0Ljk5MTUyNTQgTDI5OS4xMjAwOTksOTMuMjAzMzg5OCBMMjg1Ljk2NDc1NCw5My4yMDMzODk4IEwyNjcuMTA0ODc4LDU0Ljk5MTUyNTQgTDI2MS40MDAzNDgsMTAyLjI0MTUyNSBMMjQ0LjI4Njc1NywxMDIuMjQxNTI1IEwyNTMuMDY3NDg3LDMyLjI5NjE2ODMgTDI0OS43NzY5OTQsMjMuNDE1MjU0MiBMMjY4LjI2OTA2OCwyMy40MTUyNTQyIEwyOTIuNDg0MjE3LDc0LjIxMTg2NDQgWiBNMzU4LjA5ODg4MywxMDIuMjQxNTI1IEwzNTguMDk4ODgzLDMyLjk1NzEyMDQgTDM1NC45NzI0NzYsMjMuNDE1MjU0MiBMNDA4LjI3NTQ2NiwyMy40MTUyNTQyIEw0MDguMjc1NDY2LDM4LjE3MzcyODggTDM3NS4yMTI0NzQsMzguMTczNzI4OCBMMzc1LjIxMjQ3NCw1Ni4xMzU1OTMyIEw0MDEuNDA2NzQ2LDU2LjEzNTU5MzIgTDQwMS40MDY3NDYsNzAuNzc5NjYxIEwzNzUuMjEyNDc0LDcwLjc3OTY2MSBMMzc1LjIxMjQ3NCwxMDIuMjQxNTI1IEwzNTguMDk4ODgzLDEwMi4yNDE1MjUgWiBNNDM1LjQ3MTg2Nyw2MyBDNDM1LjQ3MTg2Nyw3Ni4xNTY3Nzk3IDQ0NS44MzMxNTYsODYuNzk2NjEwMiA0NTkuMTA0OTIxLDg2Ljc5NjYxMDIgQzQ3Mi4zNzY2ODUsODYuNzk2NjEwMiA0ODIuODU0Mzk0LDc2LjE1Njc3OTcgNDgyLjg1NDM5NCw2MyBDNDgyLjg1NDM5NCw0OS44NDMyMjAzIDQ3Mi4zNzY2ODUsMzkuMDg4OTgzMSA0NTkuMTA0OTIxLDM5LjA4ODk4MzEgQzQ0NS44MzMxNTYsMzkuMDg4OTgzMSA0MzUuNDcxODY3LDQ5Ljg0MzIyMDMgNDM1LjQ3MTg2Nyw2MyBaIE00MTguNDc0Njk1LDYzIEM0MTguNDc0Njk1LDQwLjU3NjI3MTIgNDM2LjQwMzIxOCwyMi41IDQ1OS4xMDQ5MjEsMjIuNSBDNDgxLjkyMzA0MiwyMi41IDQ5OS44NTE1NjYsNDAuNTc2MjcxMiA0OTkuODUxNTY2LDYzIEM0OTkuODUxNTY2LDg1LjE5NDkxNTMgNDgxLjkyMzA0MiwxMDMuMzg1NTkzIDQ1OS4xMDQ5MjEsMTAzLjM4NTU5MyBDNDM2LjQwMzIxOCwxMDMuMzg1NTkzIDQxOC40NzQ2OTUsODUuMTk0OTE1MyA0MTguNDc0Njk1LDYzIFogTTU0OS4xNjc1NzQsMzguMTczNzI4OCBMNTM0LjI2NTk0NCwzOC4xNzM3Mjg4IEw1MzQuMjY1OTQ0LDYwLjM2ODY0NDEgTDU0OC43MDE4OTgsNjAuMzY4NjQ0MSBDNTU1LjMzNzc4LDYwLjM2ODY0NDEgNTU4LjgzMDM1LDU0LjQxOTQ5MTUgNTU4LjgzMDM1LDQ5LjI3MTE4NjQgQzU1OC44MzAzNSw0NC4zNTE2OTQ5IDU1NS41NzA2MTgsMzguMTczNzI4OCA1NDkuMTY3NTc0LDM4LjE3MzcyODggWiBNNTU2LjYxODM4OSw3NC4zMjYyNzEyIEw1NzguNTYyODY1LDEwMi4yNDE1MjUgTDU1OC4wNzMxMjQsMTAyLjI0MTUyNSBMNTM4LjEwNzc3LDc1LjAxMjcxMTkgTDUzNC4yNjU5NDQsNzUuMDEyNzExOSBMNTM0LjI2NTk0NCwxMDIuMjQxNTI1IEw1MTcuMTUyMzUzLDEwMi4yNDE1MjUgTDUxNy4xNTIzNTMsMzIuNTU0MTM3NSBMNTEzLjgxMTE1OCwyMy40MTUyNTQyIEw1NDkuOTgyNTA3LDIzLjQxNTI1NDIgQzU2OC4xNDM4NjgsMjMuNDE1MjU0MiA1NzYuNjQyNDU0LDM2LjM0MzIyMDMgNTc2LjY0MjQ1NCw0OS4yNzExODY0IEM1NzYuNjQyNDU0LDYwLjQ4MzA1MDggNTcwLjM1NTgyOSw3MS40NjYxMDE3IDU1Ni42MTgzODksNzQuMzI2MjcxMiBaIE02MzcuOTE4OTU5LDczLjI5NjYxMDIgTDY2MS45MDEyNywyMi41IEw2NzYuMjIwODA1LDIyLjUgTDY4NiwxMDEuMzI2MjcxIEw2NjguODg2NDA5LDEwMS4zMjYyNzEgTDY2My4yOTgyOTgsNTQuMDc2MjcxMiBMNjQ0LjU1NDg0MSw5Mi4yODgxMzU2IEw2MzEuMzk5NDk2LDkyLjI4ODEzNTYgTDYxMi41Mzk2Miw1NC4wNzYyNzEyIEw2MDYuODM1MDksMTAxLjMyNjI3MSBMNTg5LjcyMTQ5OSwxMDEuMzI2MjcxIEw1OTguNTAyMjI5LDMxLjM4MDkxNCBMNTk1LjIxMTczNywyMi41IEw2MTMuNzAzODEsMjIuNSBMNjM3LjkxODk1OSw3My4yOTY2MTAyIFoiIGlkPSJTSU1GT1JNIiBmaWxsPSIjRUY1MzY2IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="}
        alt="Refine"
        style={{
          width: "200px",
          padding: "12px 23px",
        }}
      />
    )}
  </Link>
);
