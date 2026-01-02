import { SequenceDiagram } from '@dinghy/diagrams/sequenceDiagram'

import { Shape } from '@dinghy/base-components'

const DockerIcon = (props: any) => (
  <Shape
    _image='data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20122.88%2088.17%22%20style%3D%22enable-background%3Anew%200%200%20122.88%2088.17%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bfill%3A%230091E2%3B%7D%3C%2Fstyle%3E%3Cg%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M121.68%2C33.34c-0.34-0.28-3.42-2.62-10.03-2.62c-1.71%2C0-3.48%2C0.17-5.19%2C0.46c-1.25-8.72-8.49-12.94-8.78-13.16%20l-1.77-1.03l-1.14%2C1.65c-1.42%2C2.22-2.51%2C4.73-3.13%2C7.29c-1.2%2C4.96-0.46%2C9.63%2C2.05%2C13.62c-3.02%2C1.71-7.92%2C2.11-8.95%2C2.17l-80.93%2C0%20c-2.11%2C0-3.82%2C1.71-3.82%2C3.82c-0.11%2C7.07%2C1.08%2C14.13%2C3.53%2C20.8c2.79%2C7.29%2C6.95%2C12.71%2C12.31%2C16.01c6.04%2C3.7%2C15.9%2C5.81%2C27.01%2C5.81%20c5.01%2C0%2C10.03-0.46%2C14.99-1.37c6.9-1.25%2C13.51-3.65%2C19.6-7.12c5.02-2.91%2C9.52-6.61%2C13.34-10.94c6.44-7.24%2C10.26-15.33%2C13.05-22.51%20c0.4%2C0%2C0.74%2C0%2C1.14%2C0c7.01%2C0%2C11.34-2.79%2C13.73-5.19c1.6-1.48%2C2.79-3.31%2C3.65-5.36l0.51-1.48L121.68%2C33.34L121.68%2C33.34z%20M71.59%2C39.38h10.83c0.51%2C0%2C0.97-0.4%2C0.97-0.97v-9.69c0-0.51-0.4-0.97-0.97-0.97l0%2C0l-10.83%2C0c-0.51%2C0-0.97%2C0.4-0.97%2C0.97l0%2C0v9.69%20C70.68%2C38.98%2C71.08%2C39.38%2C71.59%2C39.38L71.59%2C39.38z%20M56.49%2C11.63h10.83c0.51%2C0%2C0.97-0.4%2C0.97-0.97V0.97c0-0.51-0.46-0.97-0.97-0.97%20L56.49%2C0c-0.51%2C0-0.97%2C0.4-0.97%2C0.97l0%2C0v9.69C55.52%2C11.17%2C55.97%2C11.63%2C56.49%2C11.63L56.49%2C11.63z%20M56.49%2C25.53h10.83%20c0.51%2C0%2C0.97-0.46%2C0.97-0.97v-9.69c0-0.51-0.46-0.97-0.97-0.97H56.49c-0.51%2C0-0.97%2C0.4-0.97%2C0.97l0%2C0v9.69%20C55.52%2C25.08%2C55.97%2C25.53%2C56.49%2C25.53L56.49%2C25.53z%20M41.5%2C25.53h10.83c0.51%2C0%2C0.97-0.46%2C0.97-0.97v-9.69c0-0.51-0.4-0.97-0.97-0.97%20l0%2C0H41.5c-0.51%2C0-0.97%2C0.4-0.97%2C0.97l0%2C0v9.69C40.53%2C25.08%2C40.93%2C25.53%2C41.5%2C25.53L41.5%2C25.53z%20M26.28%2C25.53h10.83%20c0.51%2C0%2C0.97-0.46%2C0.97-0.97v-9.69c0-0.51-0.4-0.97-0.97-0.97l0%2C0H26.28c-0.51%2C0-0.97%2C0.4-0.97%2C0.97v9.69%20C25.37%2C25.08%2C25.77%2C25.53%2C26.28%2C25.53L26.28%2C25.53z%20M56.49%2C39.38h10.83c0.51%2C0%2C0.97-0.4%2C0.97-0.97v-9.69c0-0.51-0.4-0.97-0.97-0.97%20l0%2C0l-10.83%2C0c-0.51%2C0-0.97%2C0.4-0.97%2C0.97l0%2C0v9.69C55.52%2C38.98%2C55.97%2C39.38%2C56.49%2C39.38L56.49%2C39.38L56.49%2C39.38z%20M41.5%2C39.38%20h10.83c0.51%2C0%2C0.97-0.4%2C0.97-0.97l0%2C0v-9.69c0-0.51-0.4-0.97-0.97-0.97l0%2C0l-10.83%2C0c-0.51%2C0-0.97%2C0.4-0.97%2C0.97l0%2C0v9.69%20C40.53%2C38.98%2C40.93%2C39.38%2C41.5%2C39.38L41.5%2C39.38L41.5%2C39.38z%20M26.28%2C39.38h10.83c0.51%2C0%2C0.97-0.4%2C0.97-0.97l0%2C0v-9.69%20c0-0.51-0.4-0.97-0.97-0.97l0%2C0l-10.83%2C0c-0.51%2C0-0.97%2C0.4-0.97%2C0.97v9.69C25.37%2C38.98%2C25.77%2C39.38%2C26.28%2C39.38L26.28%2C39.38z%20M11.35%2C39.38h10.83c0.51%2C0%2C0.97-0.4%2C0.97-0.97l0%2C0v-9.69c0-0.51-0.4-0.97-0.97-0.97l0%2C0l-10.83%2C0c-0.51%2C0-0.97%2C0.4-0.97%2C0.97l0%2C0%20v9.69C10.44%2C38.98%2C10.84%2C39.38%2C11.35%2C39.38L11.35%2C39.38L11.35%2C39.38z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'
    {...props}
  />
)

const CliIcon = (props: any) => (
  <Shape
    _image='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%22-0.75%20-0.75%2016%2016%22%20stroke%3D%22%23000000%22%20aria-hidden%3D%22true%22%20id%3D%22Command-Line--Streamline-Heroicons-Outline%22%20height%3D%2216%22%20width%3D%2216%22%3E%3Cdesc%3E%20%20%20%20Command%20Line%20Streamline%20Icon%3A%20https%3A%2F%2Fstreamlinehq.com%20%20%3C%2Fdesc%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22m4.078125%204.53125%201.8125%201.359375%20-1.8125%201.359375m2.71875%200h1.8125m-5.4375%204.984375h8.15625A1.359375%201.359375%200%200%200%2012.6875%2010.875V3.625a1.359375%201.359375%200%200%200%20-1.359375%20-1.359375H3.171875A1.359375%201.359375%200%200%200%201.8125%203.625v7.25a1.359375%201.359375%200%200%200%201.359375%201.359375Z%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E'
    {...props}
  />
)

const ProjectIcon = (props: any) => (
  <Shape
    _image='data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C!--%20Uploaded%20to%3A%20SVG%20Repo%2C%20www.svgrepo.com%2C%20Generator%3A%20SVG%20Repo%20Mixer%20Tools%20--%3E%3Csvg%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%2017L8%2015L10%2013M14%2013L16%2015L14%2017M13%203H8.2C7.0799%203%206.51984%203%206.09202%203.21799C5.71569%203.40973%205.40973%203.71569%205.21799%204.09202C5%204.51984%205%205.0799%205%206.2V17.8C5%2018.9201%205%2019.4802%205.21799%2019.908C5.40973%2020.2843%205.71569%2020.5903%206.09202%2020.782C6.51984%2021%207.0799%2021%208.2%2021H15.8C16.9201%2021%2017.4802%2021%2017.908%2020.782C18.2843%2020.5903%2018.5903%2020.2843%2018.782%2019.908C19%2019.4802%2019%2018.9201%2019%2017.8V9M13%203L19%209M13%203V8C13%208.55228%2013.4477%209%2014%209H19%22%20stroke%3D%22%23000000%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E'
    {...props}
  />
)

const sequenceDiagram = {
  title: 'Runtime sequence diagram',
  participants: {
    cli: {
      icon: CliIcon,
    },
    project: {
      icon: ProjectIcon,
    },
    engine: {
      icon: DockerIcon,
    },
    drawio: {
      icon: DockerIcon,
    },
    tf: {
      icon: DockerIcon,
    },
  },
  messages: [
    {
      from: 'cli',
      to: 'project',
      message: 'read config',
    },
    {
      from: 'project',
      to: 'cli',
      message: 'engine version',
      return: true,
    },
    {
      from: 'cli',
      to: 'engine',
      message: 'run versioned engine',
    },
    {
      from: 'engine',
      to: 'project',
      message: 'read .tsx/data',
    },
    {
      from: 'project',
      to: 'engine',
      message: 'components/model',
      return: true,
    },
    {
      from: 'engine',
      to: 'engine',
      message: 'engine commands',
      dashed: true,
    },
    {
      from: 'engine',
      to: 'cli',
      message: 'output',
      return: true,
    },
  ],
  interactions: [
    {
      title: 'Render',
      messages: [
        {
          from: 'engine',
          to: 'engine',
          message: 'render drawio/tf',
        },
      ],
    },
    {
      title: 'Diagram operations',
      messages: [
        {
          from: 'engine',
          to: 'drawio',
          message: 'render png',
        },
        {
          from: 'drawio',
          to: 'engine',
          message: 'png',
          return: true,
        },
      ],
    },
    {
      title: 'Tf operations',
      messages: [
        {
          from: 'engine',
          to: 'tf',
          message: 'terraform commands',
        },
        {
          from: 'tf',
          to: 'engine',
          message: 'up to date infrastructure',
          return: true,
        },
      ],
    },
  ],
}

export default function Stack() {
  return <SequenceDiagram {...sequenceDiagram} />
}
