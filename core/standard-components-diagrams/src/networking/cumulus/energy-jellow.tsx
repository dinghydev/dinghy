import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENERGY_JELLOW = {
  _style: 'fillColor=#FFC82E;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function EnergyJellow(props: DiagramNodeProps) {
  return <Shape {...ENERGY_JELLOW} {...props} />
}
