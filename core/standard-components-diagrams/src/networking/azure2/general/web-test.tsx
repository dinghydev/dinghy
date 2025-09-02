import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_TEST = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Web_Test.svg;strokeColor=none;',
  },
  _original_width: 72,
  _original_height: 72,
}

export function WebTest(props: DiagramNodeProps) {
  return (
    <Shape {...WEB_TEST} {...props} _style={extendStyle(WEB_TEST, props)} />
  )
}
