import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEAM_TRAP = {
  _style: {
    entity:
      'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.piping.steam_trap;',
  },
  _width: 60,
  _height: 60,
}

export function SteamTrap(props: DiagramNodeProps) {
  return (
    <Shape {...STEAM_TRAP} {...props} _style={extendStyle(STEAM_TRAP, props)} />
  )
}
