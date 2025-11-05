import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEB_TEST = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Web_Test.svg;strokeColor=none;',
  },
  _original_width: 72,
  _original_height: 72,
}

export function WebTest(props: NodeProps) {
  return (
    <Shape {...WEB_TEST} {...props} _style={extendStyle(WEB_TEST, props)} />
  )
}
