import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEAM_TRAP = {
  _style: {
    entity:
      'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.piping.steam_trap;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SteamTrap(props: NodeProps) {
  return (
    <Shape {...STEAM_TRAP} {...props} _style={extendStyle(STEAM_TRAP, props)} />
  )
}
