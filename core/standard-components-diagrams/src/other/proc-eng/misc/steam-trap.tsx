import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEAM_TRAP = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.steam_trap2;',
  _width: 53,
  _height: 53,
}

export function SteamTrap(props: DiagramNodeProps) {
  return <Shape {...STEAM_TRAP} {...props} />
}
