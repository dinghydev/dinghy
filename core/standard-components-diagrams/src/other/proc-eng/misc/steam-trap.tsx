import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEAM_TRAP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.steam_trap2;',
  },
  _original_width: 53,
  _original_height: 53,
}

export function SteamTrap(props: DiagramNodeProps) {
  return (
    <Shape {...STEAM_TRAP} {...props} _style={extendStyle(STEAM_TRAP, props)} />
  )
}
