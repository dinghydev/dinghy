import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENERGY_JELLOW = {
  _style: {
    entity: 'fillColor=#FFC82E;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function EnergyJellow(props: NodeProps) {
  return (
    <Shape
      {...ENERGY_JELLOW}
      {...props}
      _style={extendStyle(ENERGY_JELLOW, props)}
    />
  )
}
