import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEAM_TRAP = {
  _style:
    'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.piping.steam_trap;',
  _width: 50,
  _height: 50,
}

export function SteamTrap(props: DiagramNodeProps) {
  return <Shape {...STEAM_TRAP} {...props} />
}
