import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRUST = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#CC00DC;fillColor=#fff0fa;fontColor=#266f3a;strokeWidth=1.5;',
  },
  _original_width: 125,
  _original_height: 16,
}

export function Trust(props: DiagramNodeProps) {
  return <Shape {...TRUST} {...props} _style={extendStyle(TRUST, props)} />
}
