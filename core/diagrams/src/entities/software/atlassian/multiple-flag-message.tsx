import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTIPLE_FLAG_MESSAGE = {
  _style: {
    entity:
      ' rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;shadow=1;html=1;arcSize=4;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 333,
  _height: 150,
}

export function MultipleFlagMessage(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MULTIPLE_FLAG_MESSAGE)} />
}
