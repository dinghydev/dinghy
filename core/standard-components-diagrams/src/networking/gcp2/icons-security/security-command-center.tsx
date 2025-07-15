import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURITY_COMMAND_CENTER = {
  _style:
    'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjE3LjE4MDAwMDMwNTE3NTc4IiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMTcuMTgwMDAwMzA1MTc1NzggMjAiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CS5zdDF7ZmlsbDojNjY5ZGY2O30mI3hhOwk8L3N0eWxlPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05LjkgNC44NWE1LjIzIDUuMjMgMCAwIDEgMy43NSAzLjc1aDMuNTNWMy4yNEw5LjkgMHpNMy41MiA4LjYxYTUuMjIgNS4yMiAwIDAgMSAzLjc1LTMuNzVWMEwwIDMuMjR2NS4zN3pNNy4yOCAxNWE1LjIzIDUuMjMgMCAwIDEtMy43NS0zLjc1SC4yMkExMiAxMiAwIDAgMCA3LjI4IDIwem02LjM4LTMuNzVBNS4yMyA1LjIzIDAgMCAxIDkuOTEgMTV2NWExMiAxMiAwIDAgMCA3LjA1LTguNzV6Ii8+JiN4YTsJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iOC41OSIgY3k9IjkuOTIiIHI9IjIuNjMiLz4mI3hhOzwvc3ZnPg==;',
  _width: 36,
  _height: 42,
}

export function SecurityCommandCenter(props: DiagramNodeProps) {
  return <Shape {...SECURITY_COMMAND_CENTER} {...props} />
}
