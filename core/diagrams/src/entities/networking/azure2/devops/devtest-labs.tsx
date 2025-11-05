import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEVTEST_LABS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/DevTest_Labs.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 64,
}

export function DevtestLabs(props: NodeProps) {
  return (
    <Shape
      {...DEVTEST_LABS}
      {...props}
      _style={extendStyle(DEVTEST_LABS, props)}
    />
  )
}
