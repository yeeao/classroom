import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const data = JSON.parse(req.body);
  console.log(data);
  const editClass = await prisma.classroom.update({
    where: {
      classroomId: data['classroomId']
    },
    data: {
      classroomName: data['className'],
      description: data['description'],
      fccCertifications: data['fccCertifications']
    }
  });

  res.json(editClass);
}
