import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CODE_EDITOR = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/devops/code_editor.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function CodeEditor(props: DiagramNodeProps) {
  return (
    <Shape
      {...CODE_EDITOR}
      {...props}
      _style={extendStyle(CODE_EDITOR, props)}
    />
  )
}
