import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOAD_TEST = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Load_Test.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 66,
}

export function LoadTest(props: DiagramNodeProps) {
  return (
    <Shape {...LOAD_TEST} {...props} _style={extendStyle(LOAD_TEST, props)} />
  )
}
