import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRACE = {
  _style:
    'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CS5zdDF7ZmlsbDojNjY5ZGY2O30mI3hhOwk8L3N0eWxlPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMCA4SDEwdjRoMTB6bTAgOEgxMHY0aDEweiIgZmlsbD0iIzQyODVmNCIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMCAxNkg2djRoNHpNMCAwaDZ2NEgwem0wIDhoMTB2NEgweiIgZmlsbD0iIzY2OWRmNiIvPiYjeGE7PC9zdmc+;',
  _width: 40,
  _height: 40,
}

export function Trace(props: DiagramNodeProps) {
  return <Shape {...TRACE} {...props} />
}
