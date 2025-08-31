import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POLICY = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Policy.svg;strokeColor=none;',
  },
  _width: 45,
  _height: 50,
}

export function Policy(props: DiagramNodeProps) {
  return <Shape {...POLICY} {...props} _style={extendStyle(POLICY, props)} />
}
