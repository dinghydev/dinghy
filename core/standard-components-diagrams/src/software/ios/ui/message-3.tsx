import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE_3 = {
  _style:
    'shape=rect;strokeColor=none;fillColor=#ffffff;gradientColor=none;shadow=0;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  _width: 164,
  _height: 100,
}

export function Message3(props: DiagramNodeProps) {
  return <Shape {...MESSAGE_3} {...props} />
}
