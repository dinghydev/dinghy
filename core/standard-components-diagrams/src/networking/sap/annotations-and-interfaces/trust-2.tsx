import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRUST_2 = {
  _style: {
    entity:
      'endArrow=none;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;strokeColor=#cc00dc;strokeWidth=1.5;',
  },
  _width: 1,
  _height: 16,
}

export function Trust2(props: DiagramNodeProps) {
  return <Shape {...TRUST_2} {...props} _style={extendStyle(TRUST_2, props)} />
}
