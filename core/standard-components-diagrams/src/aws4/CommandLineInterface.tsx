import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMMAND_LINE_INTERFACE = {
  _color: { color: '#232F3E', fill: true },
  _border: 1,
  _shape: 'mxgraph.aws4.command_line_interface',
}

export function CommandLineInterface(props: DiagramNodeProps) {
  return <Shape {...COMMAND_LINE_INTERFACE} {...props} />
}
