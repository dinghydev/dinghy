import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENERGY_JELLOW = {
  _style: 'fillColor=#FFC82E;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 60,
}

export function EnergyJellow(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENERGY_JELLOW}
      {...props}
      _style={extendStyle(ENERGY_JELLOW, props)}
    />
  )
}
