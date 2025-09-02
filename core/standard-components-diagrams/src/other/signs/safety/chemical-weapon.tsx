import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHEMICAL_WEAPON = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.chemical_weapon;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 98,
}

export function ChemicalWeapon(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHEMICAL_WEAPON}
      {...props}
      _style={extendStyle(CHEMICAL_WEAPON, props)}
    />
  )
}
