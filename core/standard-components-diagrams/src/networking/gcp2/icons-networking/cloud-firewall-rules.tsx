import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_FIREWALL_RULES = {
  _style:
    'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjNDI4NWY0IiB2aWV3Qm94PSIwIDAgMjAgMjAiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CTwvc3R5bGU+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTAgMGg4Ljg5djIuMjJIMHptMCAxNy43OGg4Ljg5VjIwSDB6bTAtOC44OWg4Ljg5djIuMjJIMHpNMTEuMTEgMEgyMHYyLjIyaC04Ljg5em0wIDE3Ljc4SDIwVjIwaC04Ljg5em0wLTguODlIMjB2Mi4yMmgtOC44OXpNNS41NSA0LjQ0aDguODl2Mi4yMkg1LjU1em0wIDguODloOC44OXYyLjIySDUuNTV6TTAgNC40NGgzLjMzdjIuMjJIMHptMCA4Ljg5aDMuMzN2Mi4yMkgwem0xNi42Ny04Ljg5SDIwdjIuMjJoLTMuMzN6bTAgOC44OUgyMHYyLjIyaC0zLjMzeiIvPiYjeGE7PC9zdmc+;',
  _width: 42,
  _height: 42,
}

export function CloudFirewallRules(props: DiagramNodeProps) {
  return <Shape {...CLOUD_FIREWALL_RULES} {...props} />
}
