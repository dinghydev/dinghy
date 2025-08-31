import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEAM_TRAP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.steam_trap2;',
  },
  _width: 60,
  _height: 60,
}

export function SteamTrap(props: DiagramNodeProps) {
  return (
    <Shape {...STEAM_TRAP} {...props} _style={extendStyle(STEAM_TRAP, props)} />
  )
}
