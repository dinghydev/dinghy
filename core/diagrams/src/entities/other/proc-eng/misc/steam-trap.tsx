import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEAM_TRAP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.steam_trap2;',
  },
  _original_width: 53,
  _original_height: 53,
}

export function SteamTrap(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STEAM_TRAP)} />
}
