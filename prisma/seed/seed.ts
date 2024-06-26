import { Prisma, PrismaClient } from "@prisma/client";
import articles from "../../src/app/data/articles.json";

const prisma = new PrismaClient();

async function main() {
  console.log("DB Seed");
  await seedArticles;
}

async function seedArticles() {
  for (let article of articles) {
    const record = await prisma.article.create({
      data: {
        title: article.title,
        excerpt: article.excerpt,
        content: article.content,
        image: article.image,
        publishedAt: new Date(article.publish_date),
      },
    });

    console.log("*** Created Article", record.id, record.title);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
